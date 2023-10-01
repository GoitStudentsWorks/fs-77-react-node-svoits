import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import makeAnimated from 'react-select/animated';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getCategories,
  getGlasses,
} from '../../redux/filters/filters-operation';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import {
  FormContainer,
  AddPhotoButton,
  SearchForm,
  SearchandRarioDiv,
  PhotoContainer,
  SearchDrinkInput,
  SearchDrinkInput2,
  PhotoField,
  PhotoPreview,
  StyledSelect,
  SearchContainer,
  SearchDrinkLabel,
  RadioButtonDiv,
  RadioLabel,
  RadioField,
} from './DrinkDescriptionFields.styled';

const style = {
  backgroundColor: '#F3F3F3',
  width: '50px',
  height: '50px',
  borderRadius: '6px',
  color: '#161F37',
};

const validationSchema = Yup.object().shape({
  drinkThumb: Yup.string()
    .required('Cocktail photo is a mandatory field')
    .url(),

  drink: Yup.string()
    .required('Cocktail title is a mandatory field')
    .min(3, 'Cocktail name must contain at least 3 symbols'),

  description: Yup.string()
    .required('Description of the cocktail is a mandatory field')
    .min(10, 'The cocktail description must contain at least 10 symbols'),

  category: Yup.string().required('Cocktail category is a required field'),

  glass: Yup.string().required('Cocktail glass is a required field'),
});

const animatedComponents = makeAnimated();

const DrinkDescriptionFields = ({ formData, setFormData, refId }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.filters.categories);
  const glasses = useSelector((state) => state.filters.glasses);
  const birthDate = useSelector((state) => state.auth.user.birthDate);

  const [imagePreview, setImagePreview] = useState(null);
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGlass, setSelectedGlass] = useState('');

  const currentDate = new Date();
  const userBirthDate = new Date(birthDate);
  const ageDiff = currentDate.getFullYear() - userBirthDate.getFullYear();
  const defaultAlcoholic = ageDiff >= 18 ? 'alcoholic' : 'nonAlcoholic';
  const [alcoholic, setAlcoholic] = useState(defaultAlcoholic);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getGlasses());
    setAlcoholic(defaultAlcoholic);
  }, [defaultAlcoholic, dispatch]);

  const handleImageChange = (evt) => {
    const [file] = evt.target.files;

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setFormData({
        ...formData,
        drinkThumb: file,
      });
      setImagePreview(imageURL);
    }
  };

  const handleImageDelete = () => {
    setFormData({
      ...formData,
      drinkThumb: '',
    });
    setImagePreview(null);
    setIsImageSelected(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <FormContainer>
      <Formik
        initialValues={{ ...formData }}
        validationSchema={validationSchema}
        innerRef={refId}
        onSubmit={(values) => {
          setFormData({ ...formData, ...values, alcoholic });
        }}
      >
        <SearchForm>
          <PhotoContainer htmlFor="drinkThumb">
            <PhotoField
              type="file"
              id="drinkThumb"
              name="drinkThumb"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
            {isImageSelected ? (
              <button type="button" onClick={handleImageDelete}>
                <AiOutlineMinus />
                Change image
              </button>
            ) : (
              <AddPhotoButton type="button">
                <AiOutlinePlus style={style} />

                <span>Add image</span>
              </AddPhotoButton>
            )}
            {imagePreview && <PhotoPreview src={imagePreview} alt="Preview" />}
            <ErrorMessage name="drinkThumb" component="div" />
          </PhotoContainer>

          <SearchandRarioDiv>
            <SearchContainer>
              <SearchDrinkInput
                name="drink"
                value={formData.drink}
                onChange={handleChange}
                placeholder="Enter item drink"
              />
              <ErrorMessage name="drink" component="div" />

              <SearchDrinkInput
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter about description"
              />
              <ErrorMessage name="description" component="div" />

              <SearchDrinkLabel htmlFor="category">
                <p>Category</p>
                <SearchDrinkInput2
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Category"
                >
                  {({ field, form }) => (
                    <StyledSelect
                      classNamePrefix="Select"
                      closeMenuOnSelect={true}
                      isClearable={true}
                      classNames={{
                        control: (state) =>
                          state.isFocused
                            ? 'border-orange-600'
                            : 'border-grey-300',
                      }}
                      options={categories.map((category) => ({
                        value: category,
                        label: category,
                      }))}
                      name={field.name}
                      id="categories"
                      {...field}
                      value={
                        selectedCategory
                          ? {
                              value: selectedCategory,
                              label: selectedCategory,
                            }
                          : null
                      }
                      onChange={(selectedOption) => {
                        setSelectedCategory(
                          selectedOption ? selectedOption.value : null,
                        );
                        form.setFieldValue(
                          'categories',
                          selectedOption ? selectedOption.value : null,
                        );
                      }}
                      placeholder="Cocktail"
                    />
                  )}
                </SearchDrinkInput2>
              </SearchDrinkLabel>

              <SearchDrinkLabel htmlFor="glass">
                <p>Glasses</p>
                <SearchDrinkInput2
                  name="glass"
                  value={formData.glass}
                  onChange={handleChange}
                  placeholder="Glasses"
                >
                  {({ field, form }) => (
                    <StyledSelect
                      classNamePrefix="Select"
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      isClearable={true}
                      classNames={{
                        control: (state) =>
                          state.isFocused
                            ? 'border-orange-600'
                            : 'border-grey-300',
                      }}
                      options={glasses.map((glass) => ({
                        value: glass,
                        label: glass,
                      }))}
                      name={field.name}
                      id="glasses"
                      {...field}
                      value={
                        selectedGlass
                          ? { value: selectedGlass, label: selectedGlass }
                          : ''
                      }
                      onChange={(selectedOption) => {
                        if (selectedOption) {
                          setSelectedGlass(selectedOption.value);
                          form.setFieldValue('glasses', selectedOption.value);
                        }
                      }}
                      placeholder="Glasses"
                    />
                  )}
                </SearchDrinkInput2>
              </SearchDrinkLabel>
            </SearchContainer>

            <RadioButtonDiv>
              <RadioLabel>
                <RadioField
                  type="radio"
                  name="alcoholic"
                  value="alcoholic"
                  checked={alcoholic === 'alcoholic'}
                  onChange={() => setAlcoholic('alcoholic')}
                />
                <span>Alcoholic</span>
              </RadioLabel>

              <RadioLabel>
                <RadioField
                  type="radio"
                  name="alcoholic"
                  value="nonAlcoholic"
                  checked={alcoholic === 'nonAlcoholic'}
                  onChange={() => setAlcoholic('nonAlcoholic')}
                />
                <span>Non-alcoholic</span>
              </RadioLabel>
            </RadioButtonDiv>
          </SearchandRarioDiv>
        </SearchForm>
      </Formik>
    </FormContainer>
  );
};

export default DrinkDescriptionFields;

/* eslint-disable jsx-a11y/anchor-is-valid, no-console */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { CityOptionType, getCitites } from './validationUtils';
import { defaultValues, FieldName, FormData, validationSchema } from './validationSchema';
import {
  Button,
  Checkbox,
  Combobox,
  DateInput,
  ErrorSummary,
  PhoneInput,
  RadioButton,
  SelectionGroup,
  TextArea,
  TextInput,
} from '../../components';

import './validation.scss';

const cities = getCitites();

export const Hybrid = () => {
  const {
    getValues,
    handleSubmit,
    register,
    setError,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onTouched',
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const [hasBackendErrors, setHasBackendErrors] = useState<boolean>(false);

  /**
   * Set a simulated error message received from the backend
   */
  const setBackendErrorMessage = (fieldName: FieldName, message: string) => {
    setError(fieldName, {
      type: 'custom',
      message,
    });
  };

  /**
   * Get the success message for a single field
   */
  const getSuccessMessage = (fieldName: FieldName) => {
    if (fieldName === 'registerPlate') {
      return getValues('registerPlate') && errors?.registerPlate === undefined
        ? 'Register plate number is valid'
        : undefined;
    }
    return undefined;
  };

  /**
   * Handle form submit
   */
  const onSubmitHandler = (data) => {
    if (Object.keys(errors).length > 0) {
      setHasBackendErrors(false);
    } else {
      setHasBackendErrors(true);
      setBackendErrorMessage(
        'registerPlate',
        'Permit for this plate number already exists. Only one permit per vehicle is allowed.',
      );
    }
    console.log({ data });
  };

  const handleChange = (name, value) => {
    setValue(name, value, { shouldTouch: true, shouldValidate: true });
  };

  React.useEffect(() => {
    const invalidFields = Object.keys(errors);
    // check for city and if it's the 1st -> focus
    if (errors?.city) {
      if (invalidFields[0] === 'city') {
        const element = document.getElementById('city-toggle-button');
        if (element) {
          setTimeout(() => {
            element.focus();
          }, 10);
        }
      }
      return;
    }
    if (errors?.permitEndDate) {
      if (invalidFields[0] === 'permitEndDate') {
        const element = document.getElementById('permitEndDate');
        if (element) {
          setTimeout(() => {
            element.focus();
          }, 10);
        }
      }
    }
  }, [errors]);

  /**
   * Render the error summary section for backend validation errors
   */
  const renderErrorSummary = () =>
    hasBackendErrors ? (
      <ErrorSummary label="Form contains following errors" className="hds-example-form__error-summary" autofocus>
        <ul>
          <li>
            Error 1:{' '}
            <a href="#registerPlate">
              Permit for this plate number already exists. Only one permit per vehicle is allowed.
            </a>
          </li>
        </ul>
      </ErrorSummary>
    ) : null;

  return (
    <div className="hds-example-form">
      <h1 className="hds-example-form__main-title">Hybrid form validation example</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
        <h2 className="hds-example-form__title">Residental parking permit application</h2>
        {renderErrorSummary()}
        <div className="hds-example-form__required-info">All fields marked with * are required</div>
        <div className="hds-example-form__section">
          <h3 className="hds-example-form__section-title">Contact information</h3>
          <div className="hds-example-form__grid-6-6">
            <div className="hds-example-form__item">
              <TextInput
                {...register('firstName')}
                id="firstName"
                name="firstName"
                label="First name"
                invalid={!!errors.firstName?.message}
                aria-invalid={!!errors.firstName?.message}
                errorText={errors.firstName?.message}
                autoComplete="given-name"
                required
              />
            </div>
            <div className="hds-example-form__item">
              <TextInput
                {...register('lastName')}
                id="lastName"
                name="lastName"
                label="Last name"
                invalid={!!errors.lastName?.message}
                aria-invalid={!!errors.lastName?.message}
                errorText={errors.lastName?.message}
                autoComplete="family-name"
                required
              />
            </div>
          </div>
          <div className="hds-example-form__grid-8-4">
            <div className="hds-example-form__item">
              <Combobox<CityOptionType>
                id="city"
                label="City"
                optionLabelField="label"
                options={cities}
                onChange={(selected: CityOptionType) => {
                  handleChange('city', selected ? selected.label : '');
                }}
                defaultValue={{ label: getValues('city') }}
                toggleButtonAriaLabel="Toggle"
                invalid={!!errors.city?.message}
                error={errors.city?.message}
                required
                value={{ label: getValues('city') ? getValues('city') : '' }}
                onBlur={() => {
                  trigger('city');
                }}
              />
            </div>
            <div className="hds-example-form__item">
              <TextInput
                {...register('postalCode')}
                id="postalCode"
                name="postalCode"
                label="Postal code"
                invalid={!!errors.postalCode?.message}
                aria-invalid={!!errors.postalCode?.message}
                errorText={errors.postalCode?.message}
                autoComplete="postal-code"
                required
              />
            </div>
          </div>
          <div className="hds-example-form__item">
            <TextInput
              {...register('email')}
              id="email"
              name="email"
              label="Email address"
              invalid={!!errors.email?.message}
              aria-invalid={!!errors.email?.message}
              errorText={errors.email?.message}
              autoComplete="email"
              required
              tooltipButtonLabel="Tooltip: Email address"
              tooltipText="We will send a confirmation to this email address. You may also receive important updates about your parking permit via email."
            />
          </div>
          <div className="hds-example-form__grid-6-6">
            <div className="hds-example-form__item">
              <PhoneInput
                {...register('phoneNumber')}
                id="phoneNumber"
                name="phoneNumber"
                label="Phone number"
                pattern="[+][0-9]"
                helperText="Use international mobile number format, e.g. +358401234567"
                invalid={!!errors.phoneNumber?.message}
                aria-invalid={!!errors.phoneNumber?.message}
                errorText={errors.phoneNumber?.message}
                successText={getSuccessMessage('phoneNumber')}
              />
            </div>
          </div>
        </div>
        <div className="hds-example-form__section">
          <h3 className="hds-example-form__section-title">Vehicle information</h3>
          <div className="hds-example-form__grid-6-6">
            <div className="hds-example-form__item">
              <TextInput
                {...register('registerPlate')}
                id="registerPlate"
                name="registerPlate"
                label="Register plate number"
                placeholder="E.g. ABC-123"
                helperText="Use format XXX-NNN"
                invalid={!!errors.registerPlate?.message}
                aria-invalid={!!errors.registerPlate?.message}
                errorText={errors.registerPlate?.message}
                successText={getSuccessMessage('registerPlate')}
                required
                onBlur={() => trigger('registerPlate')}
              />
            </div>
          </div>
          <div className="hds-example-form__grid-6-6">
            <div className="hds-example-form__item">
              <TextInput
                {...register('brand')}
                id="brand"
                name="brand"
                label="Vehicle brand"
                placeholder="E.g. Skoda"
                invalid={!!errors.brand?.message}
                aria-invalid={!!errors.brand?.message}
                errorText={errors.brand?.message}
                required
              />
            </div>
            <div className="hds-example-form__item">
              <TextInput
                {...register('model')}
                id="model"
                name="model"
                label="Vehicle model"
                placeholder="E.g. Octavia"
                invalid={!!errors.model?.message}
                aria-invalid={!!errors.model?.message}
                errorText={errors.model?.message}
                required
              />
            </div>
          </div>
        </div>
        <div className="hds-example-form__section">
          <h3 className="hds-example-form__section-title">Parking information</h3>
          <div className="hds-example-form__grid-6-6">
            <div className="hds-example-form__item">
              <SelectionGroup label="Parking period" direction="horizontal" required>
                <RadioButton
                  {...register('parkingPeriod')}
                  id="parkingPeriodContinuous"
                  name="parkingPeriod"
                  value="continuous"
                  label="Continuous"
                  checked={getValues('parkingPeriod') === 'continuous'}
                  onChange={() => {
                    handleChange('parkingPeriod', 'continuous');
                    handleChange('permitEndDate', '');
                  }}
                />
                <RadioButton
                  {...register('parkingPeriod')}
                  id="parkingPeriodTemporary"
                  name="parkingPeriod"
                  value="temporary"
                  label="Temporary"
                  checked={getValues('parkingPeriod') === 'temporary'}
                  onChange={() => handleChange('parkingPeriod', 'temporary')}
                />
              </SelectionGroup>
            </div>
            {getValues('parkingPeriod') === 'temporary' && (
              <div className="hds-example-form__item">
                <DateInput
                  {...register('permitEndDate')}
                  id="permitEndDate"
                  name="permitEndDate"
                  label="Permit end date"
                  helperText="Use format DD.MM.YYYY"
                  minDate={new Date()}
                  onChange={(e) => {
                    handleChange('permitEndDate', e);
                  }}
                  value={getValues('permitEndDate')}
                  invalid={!!errors.permitEndDate?.message}
                  aria-invalid={!!errors.permitEndDate?.message}
                  errorText={errors.permitEndDate?.message}
                  required
                  tooltipButtonLabel="Tooltip: Permit end date"
                  tooltipText="This is the last date you need the permit to be active. The permit will expire at the inputted date at 23:59 o'clock."
                />
              </div>
            )}
          </div>
          <div className="hds-example-form__item">
            <TextArea
              {...register('additionalRequests')}
              id="additionalRequests"
              name="additionalRequests"
              label="Additional requests"
              placeholder="E.g. Request for a parking space near a specific location"
              tooltipButtonLabel="Tooltip: Additional requests"
              tooltipText="Here you may leave extra requests regarding the parking space. For example, you may request space near a specific location. If you have a large vehicle, you may request a larger space."
            />
          </div>
        </div>
        <div className="hds-example-form__section">
          <div className="hds-example-form__item">
            <Checkbox
              {...register('acceptTerms')}
              id="acceptTerms"
              name="acceptTerms"
              label="I have read and I accept the terms and conditions"
              required
              aria-invalid={!!errors.acceptTerms?.message}
              errorText={errors.acceptTerms?.message}
              checked={getValues('acceptTerms')}
              onChange={(e) => {
                handleChange('acceptTerms', e.target.checked);
              }}
            />
            <div className="hds-example-form__terms">
              <span>Read the terms of service</span>
            </div>
          </div>
        </div>
        <div className="hds-example-form__item">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

Hybrid.parameters = { loki: { skip: true } };

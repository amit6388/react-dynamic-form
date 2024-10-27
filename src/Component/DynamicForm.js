import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import "bootstrap/dist/css/bootstrap.min.css"
const DynamicForm = ({ formConfig, onSubmit }) => {
  // Generate Yup schema dynamically based on formConfig
  const validationSchema = Yup.object().shape(
    formConfig.flat().reduce((acc, field) => {
      acc[field.name] = field.yup[0]; // Access the first validation schema directly
      return acc;
    }, {})
  );

  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formConfig.map((row, rowIndex) => (
        <div className="row mb-3" key={rowIndex}>
          {row.map((field, fieldIndex) => (
            !field.hidden && ( // Only render if hidden is false
              <div className={`col-${12 / row?.length}`} key={fieldIndex}>
                <div className="form-group">
                  {/* Render text, email, file, and textarea fields */}
                  {['text', 'email', 'file', 'textarea'].includes(field.type) && (
                    <>
                      <Controller
                        name={field.name}
                        control={control}
                        defaultValue={field.value}
                        render={({ field: controllerField }) => (
                          field.type === 'textarea' ? (
                            <textarea
                              placeholder={field.placeholder}
                              className={`form-control w-100 ${errors[field.name] ? 'is-invalid' : ''} ${field.className || ''}`}
                              readOnly={field.readOnly}
                              {...controllerField}
                            />
                          ) : (
                            <input
                              type={field.type}
                              placeholder={field.placeholder}
                              className={`form-control w-100 ${errors[field.name] ? 'is-invalid' : ''} ${field.className || ''}`}
                              readOnly={field.readOnly}
                              {...controllerField}
                            />
                          )
                        )}
                      />
                      <div className="invalid-feedback">
                        {errors[field.name]?.message}
                      </div>
                    </>
                  )}

                  {/* Render number fields */}
                  {field.type === 'number' && (
                    <>
                      <Controller
                        name={field.name}
                        control={control}
                        defaultValue={field.value}
                        render={({ field: controllerField }) => (
                          <input
                            type="number"
                            placeholder={field.placeholder}
                            min={field.minValue} // Corrected prop
                            className={`form-control w-100 ${errors[field.name] ? 'is-invalid' : ''} ${field.className || ''}`}
                            readOnly={field.readOnly}
                            {...controllerField}
                          />
                        )}
                      />
                      <div className="invalid-feedback">
                        {errors[field.name]?.message}
                      </div>
                    </>
                  )}

                  {/* Render select fields */}
                  {field.type === 'select' && (
                    <>
                      <Controller
                        name={field.name}
                        control={control}
                        defaultValue={field.value}
                        render={({ field: controllerField }) => (
                          <select
                            className={`form-control w-100 ${errors[field.name] ? 'is-invalid' : ''} ${field.className || ''}`}
                            readOnly={field.readOnly}
                            {...controllerField}
                          >
                            <option value="">{field.placeholder}</option>
                            {field.options.map((option, index) => (
                              <option key={index} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        )}
                      />
                      <div className="invalid-feedback">
                        {errors[field.name]?.message}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )
          ))}
        </div>
      ))}
      
      {/* Center the button */}
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default DynamicForm;

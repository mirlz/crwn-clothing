import './form-input.styles.scss';

const FormInput = ({ label, inputOpts }) => {
  return (
    <div className="group">
      <input className="form-input" {...inputOpts} />
      {
        label && (
          <label className={`${inputOpts.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
        )
      }
    </div>
  )
}

export default FormInput;
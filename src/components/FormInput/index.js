import React from 'react';

import './styles.scss';

function FormInput({ handleChange, label, ...otherProps }) {
    return (
        <div className="container">
            <input className="form-input" onChange={handleChange} {...otherProps} />
            {label ? (
                /* aplica a classe shrink à tag label apenas se houver alguma
                entrada na tag de input do email ou da senha, etc.*/
                <label className={`${otherProps.value?.length ? "shrink" : ""} form-input-label`}>
                    {label}
                </label>
            ) : null}
        </div>
    );
}

export default FormInput;
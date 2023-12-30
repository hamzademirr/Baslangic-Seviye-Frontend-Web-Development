import './App.css';
import { Formik, Field, Form } from 'formik';
import Validation from './components/Validation';

function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          passwordChecked: '',
          gender: 'male',
          hobies: [],
          country: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}

        validationSchema={Validation}
      >
        {/* <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" />

          <br />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" />

          <br />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" />

          <br />

          <button type="submit">Submit</button>
        </Form> */}

        {
          ({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
            <form onSubmit={handleSubmit} onChange={handleChange}>
              <label htmlFor="firstName">First Name</label>
              <input name="firstName" />

              <br />

              <label htmlFor="lastName">Last Name</label>
              <input name="lastName" onChange={handleChange} />

              <br />
              <br />

              <label>Email</label>
              <input id="email" name="email" onChange={handleChange} onBlur={handleBlur} />

              <br/>
              {errors.email && touched.email && <div className='error'>{errors.email}</div>}

              <br />

              <label>Password</label>
              <input id="password" name="password" onChange={handleChange} onBlur={handleBlur} />

              <br/>
              {errors.password && touched.password && <div className='error'>{errors.password}</div>}

              <br />

              <label>Password Checked</label>
              <input id="passwordChecked" name="passwordChecked" onChange={handleChange} onBlur={handleBlur} />

              <br/>
              {errors.passwordChecked && touched.passwordChecked && <div className='error'>{errors.passwordChecked}</div>}
              <br/>

              <br />
              <br />

              <span>Male</span>
              <input type='radio' name='gender' value='male' checked={values.gender === 'male'} onChange={handleChange} />
              <span>Female</span>
              <input type='radio' name='gender' value='female' onChange={handleChange} />

              <br />

              <div>
                <input type='checkbox' name='hobies' value='football' onChange={handleChange} />
                Football
              </div>
              <div>
                <input type='checkbox' name='hobies' value='Cinema' onChange={handleChange} />
                Cinema
              </div>
              <div>
                <input type='checkbox' name='hobies' value='Photography' onChange={handleChange} />
                Photographey
              </div>

              <br />

              <select name='country' onChange={handleChange}>
                <option values='tr'>Türkiye</option>
                <option values='jp'>Japan</option>
                <option values='kr'>Korean</option>
              </select>

              <br/>
              <br/>

              <button type="submit">Submit</button>

              <br/>
              <br/>

              <code>{JSON.stringify(values)}</code>
            </form>
          )
        }

      </Formik>
    </div>
  );
}

export default App;

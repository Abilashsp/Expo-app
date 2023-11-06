import React  from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const Form = () => {
  const [initialValue,setinitialValue]=useState({firstName: '',
  lastName: '',
  Email: '',
  Password: '',});
  const [values, setValues] = useState(null);
  const[result,setresult]=useState(false)

  return (
    <View className="p-9 bg-slate-100 border rounded-lg py-20 border-gray-900/10">
      <Text className="text-2xl text-center bg-green-400 rounded-xl bottom-10 py-3">
        USER FORM
      </Text>
      <Formik
        initialValues={initialValue}
        
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required('First Name is required'),
          lastName: Yup.string().required('Last Name is required'),
          Email: Yup.string().email('Invalid email address').required('Email is required'),
          Password: Yup.string().required('Password is required'),
        })}
        onSubmit={(values,{resetForm}) => {
          setValues({ ...values });
          setresult(true);
          resetForm()
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <Text className="block text-gray-700 text-sm font-bold mb-2">First Name:</Text>
            <TextInput
              value={values.firstName}
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              placeholder="Enter your first name"
              className="w-full p-2 border rounded-md"
            />
           <Text> <ErrorMessage name="firstName" component={Text} className="text-red-500" /></Text>

            <Text className="block text-gray-700 text-sm font-bold mb-2 mt-2">Last Name:</Text>
            <TextInput
              value={values.lastName}
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              placeholder="Enter your last name"
              className="w-full p-2 border rounded-md"
            />
           <Text> <ErrorMessage name="lastName" component={Text} className="text-red-500" /></Text>

            <Text className="block text-gray-700 text-sm font-bold mb-2 mt-2">Email:</Text>
            <TextInput
              value={values.Email}
              onChangeText={handleChange('Email')}
              onBlur={handleBlur('Email')}
              placeholder="Enter your Email"
              className="w-full p-2 border rounded-md"
            />
         <Text> <ErrorMessage name="Email" component={Text} className="text-red-500" /></Text>

            <Text className="block text-gray-700 text-sm font-bold mb-2 mt-2">Password:</Text>
            <View>
            <TextInput
              value={values.Password}
              onChangeText={handleChange('Password')}
              onBlur={handleBlur('Password')}
              placeholder="Enter your Password"
              className="w-full p-2 border rounded-md mb-10"
              keyboardType="numeric"
              secureTextEntry={true}
            />
         <Text className="bottom-10"><ErrorMessage name="Password" component={Text} className="text-red-500" /></Text>
         </View>

            <Button title="Submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
      {result&&<View className="px-5 py-8 bottom-2 border mt-6 rounded-xl">
        <Text className="py-2 text-lg">First Name: {values?.firstName}</Text>
        <Text className="py-2 text-lg">Last Name: {values?.lastName}</Text>
        <Text className="py-2 text-lg">Email: {values?.Email}</Text>
        <Text className="py-2 text-lg">Password: {values?.Password}</Text>
      </View>}
    </View>
  );
};

export default Form;

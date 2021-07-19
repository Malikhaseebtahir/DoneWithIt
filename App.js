import React, { useState } from 'react';
import AppPicker from './app/components/AppPicker';

import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 }
]

export default function App() {
  const [category, setCategory] = useState(categories[0])

  return (
    <Screen>
      <AppPicker 
        selectedItem={category}
        onSelectedItem={(item) => setCategory(item)}
        icon='apps' placeHolder='Cateory' items={categories}/>
      <AppTextInput placeholder='Username' icon='email' clearButtonMode='always'/>
    </Screen>
  );
}

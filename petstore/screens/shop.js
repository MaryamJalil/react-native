import React from 'react';
import { StyleSheet, View, Text,Image,ScrollView ,Button} from 'react-native';
import { globalStyles } from '../styles/global';

export default function Shop() {
  return (
    <View style={globalStyles.petcontainer}>
        <ScrollView>

        <View   style={globalStyles.imageview}>

<Image  source={require('./images/01CatFood.jpg')} style={globalStyles.petimage  }      

/>
</View>
<View style={globalStyles.imagebutton} >
<Button
          title="Shop Now"
          color="#212121"
        />
</View>


<View  style={globalStyles.imageview}>
<Image  source={require('./images/03CatLitter.jpg')} style={globalStyles.petimage} />
</View>
<View style={globalStyles.imagebutton}>
<Button
          title="Shop Now"
          color="#212121"
        />
        <View style={globalStyles.imageview}>
        </View>
<Image  source={require('./images/04CatHealth.jpg')} style={globalStyles.petimage} />
</View>
<View style={globalStyles.imagebutton}>
<Button
          title="Shop Now"
          color="#212121"
        />
        <View style={globalStyles.imageview}>
        </View>
<Image  source={require('./images/05CatTree.jpg')}  style={globalStyles.petimage}/>
</View>
<View style={globalStyles.imagebutton}>
<Button
          title="Shop Now"
          color="#212121"s
        />
        <View style={globalStyles.imageview}>
        </View>
<Image  source={require('./images/06CatPen.jpg')}  style={globalStyles.petimage}/>
</View>
<View style={globalStyles.imagebutton}>
<Button
          title="Shop Now"
          color="#212121"
        />
        </View>
        <View style={globalStyles.imageview}>
<Image  source={require('./images/07CatFeed.jpg')}  style={globalStyles.petimage}/>
</View>
<View style={globalStyles.imagebutton}>
<Button
          title="Shop Now"
          color="#212121"
          
        />
        </View>
        <View style={globalStyles.imageview}>
<Image  source={require('./images/08CatToys.jpg')}  style={globalStyles.petimage}/>
</View>
<View style={globalStyles.imagebutton}>
<Button
          title="Shop Now"
          color="#212121"
        />
        </View>
        <View style={globalStyles.imageview}>
<Image  source={require('./images/09CatApparel.jpg')} style={globalStyles.petimage} />
</View>
<View style={globalStyles.imagebutton}>
<Button
          title="Shop Now"
          color="#212121"
        />
        </View>
        <View style={globalStyles.imageview}>
{/* <Image  source={require('./images/10CatCollar.jpg')} /> */}
<Image  source={require('./images/12CatFlea.jpg')} style={globalStyles.petimage} />
</View>
<View style={globalStyles.imagebutton}>
<Button
          title="Shop Now"
          color="#212121"
        />
        </View>
</ScrollView>

</View>
  );
}
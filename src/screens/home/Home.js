import {SafeAreaView, View, ScrollView} from 'react-native';
import {Banner, Category, Worker, SectionTitle} from 'src/components';
import CleaningMaid from 'src/assets/images/cleaning_maid.jpg';
import Repairing from 'src/assets/images/repairing.jpg';
import Laundry from 'src/assets/images/laundry.jpg';
import Profile1 from 'src/assets/images/person1.jpg';
import Profile2 from 'src/assets/images/person2.jpeg';
import Profile3 from 'src/assets/images/person3.jpeg';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Banner />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <SectionTitle text="Category" />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Category image={CleaningMaid} text="Cleaning" />
            <Category image={Repairing} text="Repairing" />
            <Category image={Laundry} text="Laundry" />
          </ScrollView>
        </View>
        <Worker
          image={Profile1}
          service="Furniture Cleaning"
          organization="Theresa Web"
          price="16"
          startingTime="10"
          endingTime="9"
        />
        <Worker
          image={Profile2}
          service="Baby Sitting"
          organization="Faltsy Org"
          price="26"
          startingTime="9"
          endingTime="8"
        />
        <Worker
          image={Profile3}
          service="Cleaning Service"
          organization="Tamara Holdings"
          price="30"
          startingTime="8"
          endingTime="6"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

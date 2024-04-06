import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "./signin/Signin";
import Signup from './signUp/Signup'

const Stack = createStackNavigator();

export default function AuthStack(){

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Signin"   
                    component={Signin} 
                    options={{
                        title: "",
                        headerShown: false
                    }}/>
                <Stack.Screen 
                    name = "Signup" 
                    component = {Signup}
                    options={{
                        title: "",
                        headerShown: false
                    }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}
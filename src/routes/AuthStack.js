import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../screens/SignInScreen/Signin";
import Signup from '../screens/SignUpScreen/Signup'

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
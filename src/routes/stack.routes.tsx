
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreen } from "../screens/MainScreen";
import { SkillScreen } from "../screens/SkillScreen";




const { Screen, Navigator } = createNativeStackNavigator()

export function StackRoutes() {
        return (
            <Navigator>
                <Screen name="MainScreen" component={MainScreen} options={{title: 'MainScreen', headerTintColor:'black', headerShown: true }}/>
                <Screen name="SkillScreen" component={SkillScreen} options={{title: 'SkillScreen', headerTintColor:'black', headerShown: true}}/>
            </Navigator>
        )
}


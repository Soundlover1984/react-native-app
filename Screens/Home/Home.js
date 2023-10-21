import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import CreatePostsScreen from "../CreatePostsScreen";
import PostsScreen from "../PostsScreen";
import ProfileScreen from "../ProfileScreen";
import LogoutButton from "../../components/LogoutButton";
import ReturnButton from "../../components/ReturnButton";
import { styles } from "./HomeStyles";
import {
    AddIcon,
    PostsIcon,
    ProfileIcon,
} from "../../components/SvgIcons/SvgIcons";

const AppTabs = createBottomTabNavigator();

const Home = () => {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <AppTabs.Navigator screenOptions={styles.homeContainer}>
            <AppTabs.Screen
                name="PostsScreen"
                component={PostsScreen}
                options={{
                    headerTitle: () => (
                        <Text style={styles.homePageHeader}>Публікації</Text>
                    ),
                    headerRight: () => (
                        <View style={{ marginRight: 16 }}>
                            <LogoutButton
                                onPress={() =>
                                    navigation.navigate("LoginScreen")
                                }
                            />
                        </View>
                    ),
                    tabBarIcon: () => <PostsIcon />,
                }}
            />
            <AppTabs.Screen
                name="CreatePostsScreen"
                component={CreatePostsScreen}
                initialParams={{ user: route.params.params.user }}
                options={{
                    tabBarStyle: { display: "none" },
                    headerTitle: () => (
                        <Text style={styles.homePageHeader}>
                            Створити публікацію
                        </Text>
                    ),
                    headerLeft: () => (
                        <View style={{ marginLeft: 16 }}>
                            <ReturnButton
                                onPress={() =>
                                    navigation.navigate("Home", {
                                        screen: "PostsScreen",
                                        params: {
                                            user: "123",
                                        },
                                    })
                                }
                            />
                        </View>
                    ),
                    tabBarIcon: () => (
                        <View style={styles.addButton}>
                            <AddIcon />
                        </View>
                    ),
                }}
            />
            <AppTabs.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => <ProfileIcon />,
                }}
            />
        </AppTabs.Navigator>
    );
};

export default Home;
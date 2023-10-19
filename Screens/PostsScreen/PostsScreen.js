import { View, Text, ScrollView } from "react-native";

import { styles } from "./PostsScreenStyles";
import AuthenticatedUserInfo from "../../components/AuthenticatedUserInfo";
import PostComponent from "../../components/PostComponent/PostComponent";
import { posts } from "../../posts";

const PostsScreen = () => {
    const handleLogoutPress = () => {
        console.log("Logout");
    };

    return (
        <View style={styles.postsScreenContainer}>
            {/* <View style={styles.postsScreenHeaderContainer}>
                <Text style={styles.postsScreenHeader}>Публікації</Text>
                <LogoutButton onPress={handleLogoutPress}></LogoutButton>
            </View> */}
            <AuthenticatedUserInfo />
            {/* <AppControls /> */}
            <ScrollView
                style={{ margin: 0, padding: 16 }}
                showsVerticalScrollIndicator={false}
            >
                {posts.map(
                    ({ img, description, likes, comments, locationName }) => {
                        return (
                            <PostComponent
                                key={description}
                                image={img}
                                description={description}
                                likes={likes}
                                comments={comments}
                                locationName={locationName}
                            />
                        );
                    }
                )}
            </ScrollView>
        </View>
    );
};

export default PostsScreen;
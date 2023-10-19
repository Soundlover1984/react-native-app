import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, Image, ScrollView } from "react-native";
// import { nanoid } from "nanoid";

import { styles } from "./CommentsScreenStyles";
import ReturnButton from "../../components/ReturnButton";
import postPhoto from "../../assets/images/fire.png";
// import userPhoto from "../../assets/images/User.jpg";
import commentatorPhoto from "../../assets/images/comentator.png";
import CommentComponent from "../../components/CommentComponent";
import CommentInput from "../../components/CommentInput/CommentInput";

const CommentsScreen = () => {
    const [currentPostPhoto, setCurrentPostPhoto] = useState(postPhoto);
    const {
        params: { comments },
    } = useRoute();

    const handleReturnPress = () => {
        console.log("Logout");
    };

    console.log(comments);

    return (
        <View style={styles.commentsScreenContainer}>
            <View style={styles.commentsHeaderContainer}>
                <ReturnButton onPress={handleReturnPress}></ReturnButton>
                <Text style={styles.commentsHeader}>Коментарі</Text>
            </View>
            <View
                style={{
                    paddingLeft: 16,
                    paddingRight: 16,
                    marginBottom: 20,
                }}
            >
                <View style={styles.postPhotoContainer}>
                    <Image
                        source={currentPostPhoto}
                        style={{
                            width: "100%",
                            height: 240,
                            borderRadius: 8,
                        }}
                    />
                </View>
            </View>
            <ScrollView
                style={{ margin: 0, padding: 0 }}
                showsVerticalScrollIndicator={false}
            >
                {/* {comments.map(({ author, text, date }) => {
                    return (
                        <CommentComponent
                            key={text}
                            author={author}
                            text={text}
                            date={date}
                            userIcon={commentatorPhoto}
                        />
                    );
                })} */}
            </ScrollView>
            <CommentInput />
        </View>
    );
};

export default CommentsScreen;
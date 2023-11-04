import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    createPostsScreenContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
    },
    createPostsHeaderContainer: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        width: "100%",
        height: 90,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 12,
        marginBottom: 32,
        borderStyle: "solid",
        borderColor: "#E8E8E8",
        borderBottomWidth: 1,
    },
    createPostsHeader: {
        marginLeft: "auto",
        marginRight: "auto",
        fontWeight: 500,
        fontSize: 17,
    },

    postPhotoContainer: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 8,
        width: "100%",
        backgroundColor: "#F6F6F6",
        borderRadius: 8,
        borderStyle: "solid",
        borderColor: "#E8E8E8",
        borderWidth: 1,
    },
    addPhotoButton: {
        position: "absolute",
        top: "40%",
        left: "40%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 60,
        height: 60,
        backgroundColor: "#ffffff",
        borderRadius: 50,
    },
    photoMetaInput: {
        width: "100%",
        height: 50,
        marginBottom: 16,
        fontSize: 16,
        color: "#212121",
        borderStyle: "solid",
        borderColor: "#E8E8E8",
        borderBottomWidth: 1,
    },
    mapButton: {
        position: "absolute",
        top: 13,
    },
    publishButton: {
        width: "100%",
        height: 50,
        marginBottom: 120,
        padding: 16,
        borderRadius: 100,
        backgroundColor: "#FF6C00",
    },
    removePostButton: {
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center",
        justifyContent: "center",
        width: 70,
        height: 40,
        backgroundColor: "#F6F6F6",
        borderRadius: 20,
    },
});

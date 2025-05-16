import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Note {
  text: string;
  // add other fields if needed
}

interface NoteItemProps {
  note: Note;
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  return (
    <View style={styles.noteItem}>
      <Text style={styles.noteText}>{note.text}</Text>
    </View>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  // Styles for the note item
  noteItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  noteText: {
    fontSize: 18,
  },
});

import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import NoteItem from "./NoteItem";

interface Note {
  id: number;
  text: string;
  // add other note properties as needed
  [key: string]: any;
}

interface NoteListProps {
  notes: Note[];
}

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
  return (
    <View>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NoteItem note={item} />}
      />
    </View>
  );
};

export default NoteList;

const styles = StyleSheet.create({});

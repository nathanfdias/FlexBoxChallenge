import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Layout1 from "./components/layout1";
import Layout2 from "./components/layout2";

export default function App() {
  const [change, setChange] = useState(false);

  return (
    <>
      <ScrollView>
        {(() => {
          if (change) {
            return (
              <>
                <Layout2/>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => setChange(!change)}>
                      <Text style={{ backgroundColor: "white", padding: 10 }}>
                        Change Layout
                      </Text>
                    </TouchableOpacity>
                </View>
              </>
            );
          } else {
            return (
              <>
                <Layout1 />
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => setChange(!change)}>
                      <Text style={{ backgroundColor: "white", padding: 10 }}>
                        Change Layout
                      </Text>
                    </TouchableOpacity>
                </View>
              </>
            );
          }
        })()}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    height: 78,
    backgroundColor: "#59f",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { Text } from "react-native";
import { styles } from "../styles/StyleSheet";
import { TouchableOpacity } from "react-native";

export default function Btn2() {
  pressButton = () => {
    alert("Você clicou no botão!");
  };
  return (
    <TouchableOpacity style={styles.btn2} onPress={pressButton}>
      <Text style={styles.textbutton2}>Sign in</Text>
    </TouchableOpacity>
  );
}

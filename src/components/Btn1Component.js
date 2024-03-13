import { Text } from "react-native";
import { styles } from "../styles/StyleSheet";
import { TouchableOpacity } from "react-native";

export default function Btn1() {
  pressButton = () => {
    alert("Você clicou no botão!");
  };
  return (
    <TouchableOpacity style={styles.btn1} onPress={pressButton}>
      <Text style={styles.textbutton1}>Log In</Text>
    </TouchableOpacity>
  );
}

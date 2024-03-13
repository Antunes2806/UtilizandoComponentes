import { Image } from "react-native";
import { styles } from "../styles/StyleSheet";
import { TouchableOpacity } from "react-native";
//tteste
export default function Btn3() {
  pressButton = () => {
    alert("Você clicou no botão!");
  };
  return (
    <TouchableOpacity onPress={pressButton}>
      <Image
        source={require("../assets/images/gatinho.jpg")}
        resizeMode="cover"
        style={styles.image}
      ></Image>
    </TouchableOpacity>
  );
}

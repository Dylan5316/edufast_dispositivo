import { StyleSheet } from "react-native";
const HomeStyles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: 'black', 
      }, 
       
      imageBackground: { 
        width: '100%', 
        height: '100%', 
        opacity: 4, 
        bottom: '30%', 
      }, 
     
      form: { 
        width: '100%', 
        height: '70%', 
        backgroundColor: 'white', 
        position: 'absolute', 
        bottom: 0, 
        borderTopLeftRadius: 40, 
        borderTopRightRadius: 40, 
        padding: 30, 
      }, 
     
      formText: { 
        fontWeight: 'bold', 
        fontSize: 16, 
      }, 
     
      formIcon: { 
        width: 25, 
        height: 25, 
        marginTop: 5, 
      }, 
     
      formInput: { 
        flexDirection: 'row', 
        marginTop: 25, 
      }, 
     
      formTextInput: { 
        flex: 1, 
        borderBottomWidth: 1, 
        borderBottomColor: '#AAAAAA', 
        marginLeft: 15, 
      }, 
     
      formRegister: { 
        flexDirection: 'row', 
        justifyContent: 'center', 
        marginTop: 30, 
      }, 
     
      formRegisterText: { 
        fontStyle: 'italic', 
        color: 'orange', 
        borderBottomWidth: 1, 
        borderBottomColor: 'orange', 
        fontWeight: 'bold', 
        marginLeft: 10, 
      }, 
      logoContainer: { 
        position: 'absolute', 
        alignSelf: 'center', 
        top: '5%', 
        alignItems: 'center', 
      }, 
      logoImage: { 
    width: 100, 
    height: 100, 
    }, 
    logoText: { 
    color: 'white', 
    textAlign: 'center', 
    fontSize: 20, 
    marginTop: 10, 
    fontWeight: 'bold', 
    }, 
    label: {
      fontSize: 16,
      color: '#4d4d4d',
      marginBottom:20,
      marginTop:21,
      fontWeight: 'bold',
    },
    dropdown: {
      marginTop:30,
      margin: 4,
      height: 50,
      backgroundColor: 'white',
      borderRadius: 15,
      padding: 12,
      borderColor: 'g',
      borderWidth: 1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
  },
  placeholderStyle: {
      fontSize: 16,
      color: '#7A7A7A', // Contraste mejorado
  },
  selectedTextStyle: {
      fontSize: 16,
  },  

    }); 
export default HomeStyles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    marginBottom: 20,
    width: 300,
    // backgroundColor: "transparent",
  },
  input: {
    textAlign: 'center',
    height: 40,
    margin: 20,
    width: 250,
    borderWidth: 2,
    borderColor: '#000',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  btn: {
    height: 40,
    margin: 20,
    width: 250,
    backgroundColor: 'transparent',
    borderWidth: 2,
  },
  btnText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  cardView: {
    // backgroundColor: "black",
    height: 400,
  },
  card: {
    marginLeft: 120,
    justifyContent: 'center',
    borderWidth: 10,
    // borderShadow: true,
    backgroundColor: 'orange',
    height: 200,
    margin: 30,
    paddingLeft: 20,
    width: 250,
    borderRadius: 20,
    borderColor: 'orange',
  },
  cardText: {
    fontSize: 40,
    fontStyle: 'italic',
    color: 'black',
    // writingDirection:  "rtl",
    // fontFamily: "Open Sans"
  },
  home2: {
    // flex: 1,
    // flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    height: 40,
    margin: 20,
    marginLeft: 70,
    width: 250,
    backgroundColor: 'cyan',
    borderRadius: 20,
    bottomView: {
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 20, //Here is the trick
    },
  },
});

export default styles;

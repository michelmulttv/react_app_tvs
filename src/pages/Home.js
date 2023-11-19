/* eslint-disable react/no-multi-comp */
import React, { useContext, useEffect, useRef} from "react";

import PropTypes from "prop-types";
import shuffle from "lodash/shuffle";
import throttle from "lodash/throttle";
import ReactPlayer from "react-player";

import $ from 'jquery';




// import DISCOVERYWORLD from '../DISCOVERYWORLD.png';
// import FISHTV from '../FISHTV.png';
import TVCAMARA from '../TVCAMARA.png';
import TVJUSTICA from '../TVJUSTICA.png';
import TVSENADO from '../TVSENADO.png';
// import WARNER from '../WARNER.png';


import {
  View,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";


import {
  initNavigation,
  withFocusable
} from "@noriginmedia/react-spatial-navigation";

initNavigation({
  debug: false,
  visualDebug: false
});

// SpatialNavigation.setKeyMap(keyMap); -> Custom key map

// const KEY_ENTER = "enter";
const KEY_ENTER = 13;



const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // maxHeight: 400,
    // maxWidth: 800,
    // height: 3000,
    height:'100vh',
    backgroundColor: "#333333",
    flexDirection: "row"
  },
  content: {
    paddingTop: 30,
    flex: 1
  },
  menu: {
    maxWidth: 150,
    // height: 100,
    // height:'100vh',
    flex: 1,
    alignItems: "center",
    // justifyContent: "space-around",
    // justifyContent: "space-evenly"
    backgroundColor: '#030303',

  },
  menuFocused: {
    // backgroundColor: "#546e84"
    backgroundColor: '#030303'
  },

  LogoutItem: {
    width: '95%',
    height: 50,
    // backgroundColor: "#f8f258",
    backgroundColor: "#00031f",
    marginTop: 10,
    marginBottom: 200,
    borderWidth: 1,
    borderColor: '#464646'
  },

  menuItem: {
    width: '95%',
    height: 50,
    marginBottom: 20,
    // backgroundColor: "#f8f258",
    // backgroundColor: "#a5d5e1"
    backgroundColor: "#242424"
  },

  

  // menuItem: {
  //   width: 50,
  //   height: 50,
  //   // backgroundColor: "#f8f258",
  //   backgroundColor: "#a5d5e1"
  // },


  activeWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  activeProgram: {
    width: 854,
    height: 480,
    marginTop: 100,
    marginBottom: 100
  },
  activeProgramTitle: {
    padding: 20,
    color: "white"
  },
  programWrapper: {
    padding: 10,
    alignItems: "center"
  },
  program: {    
    width: 200,
    height: 200,
    backgroundColor: 'rgba(0,0,0,0.5)',
    // opacity: '0,5'
    padding: 5,
    marginBottom: 10,
    shadowColor: "gold",
    shadowOffset: {width: 4, height: 4}, 
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
    
    // box-shadow: 0 0 4em gold;
  

       // shadowColor: '#171717',
    // shadowOffset: {width: -2, height: 4},
  },
  programTitle: {
    color: "white",
    fontSize: 25
  },
  categoryWrapper: {
    padding: 20
    
  },
  categoryTitle: {
    color: "white",
    fontSize: 25
  },
  categoriesWrapper: {
    flex: 1
  },
  focusedBorder: {
    borderWidth: 6
    // borderColor: '#FCCF00'
    // backgroundColor: "white"
  }
});

// const categories = shuffle([
//   {
//     title: "Canais Abertos"
//   },
//   {
//     title: "Musicas"
//   }
// ]);

const categories = ([
  {
    title: "Lista de Canais"
  },
  // {
  //   title: "Musicas"
  // }
]);

// shuffle
const programs = ([

  // {
  //   title: "TV Aparecida",
  //   color: "#337fdd",
  //   // url_logo: '../../DISCOVERYWORLD.png'
  //   url_logo: './ok.png'
  // },




//   {
//     title: "Discovery World",
//     color: "#337fdd",
//     // url_logo: '../../DISCOVERYWORLD.png'
//     url_logo: DISCOVERYWORLD,
//     url_channel: "https://bkm100.multtv.tv.br/bpk-tv/DISCOVERYWORLD/default/index.m3u8"
//   },
//   {
//     title: "Fish TV",
//     color: "#dd4558",
//     url_logo: FISHTV,
//     url_channel: "https://bkm100.multtv.tv.br/bpk-tv/FishTV/default/index.m3u8"
//   },
  {
    title: "TV Câmara",
    color: "#7ddd6a",
    url_logo: TVCAMARA,
    url_channel: "https://hls.fasternet.com.br/sd/TVCamara.m3u8"
  },
  {
    title: "TV Justiça",
    color: "#dddd4d",
    url_logo: TVJUSTICA,
    url_channel: "https://hls.fasternet.com.br/sd/TVJustica.m3u8"
  },
  {
    title: "TV Senado",
    color: "#8299dd",
    url_logo: TVSENADO,
    url_channel: "https://hls.fasternet.com.br/sd/TVSenado.m3u8"
  }
//   {
//     title: "Warner",
//     color: "#edab83",
//     url_logo: WARNER,
//     url_channel: "https://bkm100.multtv.tv.br/bpk-tv/WARNER/default/index.m3u8"
//   }
]);

const RETURN_KEY = 8;
const B_KEY = 66;

/* eslint-disable react/prefer-stateless-function */

const Home = () => {




          //===================== Essa classe se refere ao LOGOUT BUTTON ====================== //
          class LogoutButton extends React.PureComponent {



            // constructor(props) {
            //   super(props);

            //   this.onPressKey = this.onPressKey.bind(this);
            //   this.onLogoutPress = this.onLogoutPress.bind(this);
              
            // }

            // componentDidMount() {
            //   this.props.setFocus();

            //   window.addEventListener("keydown", this.onPressKey);
            // }

            // componentWillUnmount() {
            //   window.removeEventListener("keydown", this.onPressKey);
            // }

            
            // // // onLogoutPress(event) {
            // // //   if (event.keyCode === KEY_ENTER) {
            // // //     // console.log('pressionou enter');
            // // //     // setToken(null);
            // // //   }
            // // // }

            // onPressKey(event) {
            //   if (event.keyCode === RETURN_KEY) {
            //     this.props.setFocus();
            //   }else if(event.keyCode === KEY_ENTER){
            //     if($(this).attr('id') === 'logout'){
            //       console.log('deveria fazer logout');
            //     }
            //   }

            //   // alert('teste')
            // }


            // onLogoutPress( { pressedKeys } = {}) {
            //   if (pressedKeys && pressedKeys[KEY_ENTER] > 1) {
            //     return;
            //   }
            //   // setToken(null);
            //   console.log('fazendo logout');
            // }

            constructor() {
              super();
              this.state = {
                name: "React-bootstrap key enter event"
              };
              this.onKeyUp = this.onKeyUp.bind(this);
            }
          
            onKeyUp(event) { 
              // if (event.charCode === 13) {
              //   // this.setState({ inputValue: event.target.value });
              //   console.log('teste');
              // }
            } 



            render() {
              // console.log('Menu item rendered: ', this.props.realFocusKey);

              return (
                <TouchableOpacity  
                  style={[
                    styles.LogoutItem,
                    this.props.focused ? styles.focusedBorder : null
                  ]}        
                >
                  <Text onKeyPress={this.onKeyUp}  style={{color: 'white', fontSize:'25px'}}>Sair</Text>
                </TouchableOpacity>
                
              );
            }
          }

          LogoutButton.propTypes = {
            focused: PropTypes.bool.isRequired

            // realFocusKey: PropTypes.string.isRequired
          };



          //===================== Essa classe se refere as MenuItem ====================== //
          class MenuItem extends React.PureComponent {







            render() {
              // console.log('Menu item rendered: ', this.props.realFocusKey);

              return (
                <TouchableOpacity
                  style={[
                    styles.menuItem,
                    this.props.focused ? styles.focusedBorder : null
                  ]}        
                >

                </TouchableOpacity>
                
              );
            }
          }

          MenuItem.propTypes = {
            focused: PropTypes.bool.isRequired

            // realFocusKey: PropTypes.string.isRequired
          };

          const MenuItemFocusableLogout = withFocusable()(LogoutButton);
          const MenuItemFocusable = withFocusable()(MenuItem);



          //===================== Essa classe se refere ao MENU ====================== //
          class Menu extends React.PureComponent {
            constructor(props) {
              super(props);

              this.onPressKey = this.onPressKey.bind(this);
              // this.onLogoutPress = this.onLogoutPress.bind(this);
            }

            componentDidMount() {
              this.props.setFocus();

              window.addEventListener("keydown", this.onPressKey);
            }

            componentWillUnmount() {
              window.removeEventListener("keydown", this.onPressKey);
            }

            onPressKey(event) {
              // if (event.keyCode === RETURN_KEY) {
              //   this.props.setFocus();
              // }
              
            // if(event.keyCode === KEY_ENTER){
            //     // if($(this).attr('id') === 'logout'){
            //     //   console.log('deveria fazer logout');
            //     // }

            //     alert('opa')
            //   }

              // alert('teste')
            }


          //   onLogoutPress(event) {
          //     if (event.keyCode === KEY_ENTER) {
          //       console.log('fazendo logout');
          //     }              

          //   }

          //   // onLogoutPress( { pressedKeys } = {}) {
          //   //   if (pressedKeys && pressedKeys[KEY_ENTER] > 1) {
          //   //     return;
          //   //   }
          //   //   // setToken(null);
          //   //   console.log('fazendo logout');
          //   // }

          //   handleKeyDowns(event) {
          //     if(event.nativeEvent.key == "Enter"){
          //         console.log('enter');
          //     }
          // }

          // handleSearch(){
          //   console.log('teste');
          // }




            render() {
              // console.log('Menu rendered: ', this.props.realFocusKey);



              return (
                <View
                  style={[
                    styles.menu,
                    this.props.hasFocusedChild ? styles.menuFocused : null
                  ]}
                >
                  <MenuItemFocusableLogout onEnterPress={console.log('testeeee')} /> 
                  <MenuItemFocusable focusKey={"MENU-2"} />
                  <MenuItemFocusable focusKey={"MENU-3"} />
                  {/* <MenuItemFocusable focusKey={"MENU-4"} />
                  <MenuItemFocusable focusKey={"MENU-5"} />
                  <MenuItemFocusable focusKey={"MENU-6"} /> */}



                </View>


              );
            }
          }

          Menu.propTypes = {
            setFocus: PropTypes.func.isRequired,
            hasFocusedChild: PropTypes.bool.isRequired

            // realFocusKey: PropTypes.string.isRequired
          };

          const MenuFocusable = withFocusable({
            trackChildren: true
          })(Menu);



          //===================== Essa classe se refere ao CONTEUDO ====================== //
          class Content extends React.PureComponent {
            constructor(props) {
              super(props);

              this.state = {
                currentProgram: null,
                blockNavigationOut: false
              };

              this.onPressKey = this.onPressKey.bind(this);
              this.onProgramPress = this.onProgramPress.bind(this);
            }

            componentDidMount() {
              window.addEventListener("keydown", this.onPressKey);
            }

            componentWillUnmount() {
              window.removeEventListener("keydown", this.onPressKey);
            }

            onPressKey(event) {
              if (event.keyCode === B_KEY) {
                const { blockNavigationOut: blocked } = this.state;

                // console.warn(
                //   `blockNavigationOut: ${!blocked}. Press B to ${
                //     blocked ? "block" : "unblock "
                //   }`
                // );
                this.setState((prevState) => ({
                  blockNavigationOut: !prevState.blockNavigationOut
                }));
              }
            }

            onProgramPress(programProps, { pressedKeys } = {}) {
              // if (pressedKeys && pressedKeys[KEY_ENTER] > 1) {
              //   return;
              // }

              // if(pressedKeys[KEY_ENTER] === 13){
              //   alert('ok')
              // }
              this.setState({
                currentProgram: programProps
                
              });
              // setToken(null);
              // console.log('canal selecionado');
            }

            render() {
              const { blockNavigationOut } = this.state;

              // console.log('content rendered: ', this.props.realFocusKey);

              return (
                <View style={styles.content}>
                  <Active program={this.state.currentProgram} />
                  <CategoriesFocusable
                    focusKey={"CATEGORIES"}
                    onProgramPress={this.onProgramPress}
                    blockNavigationOut={blockNavigationOut}
                  />
                </View>
              );
            }
          }

          Content.propTypes = {
            // realFocusKey: PropTypes.string.isRequired
          };

          const ContentFocusable = withFocusable()(Content);


          // ======================  Essa classe se refere o Canal Ativo ===============================//
          class Active extends React.PureComponent {
            render() {
              const { program } = this.props;

              const style = {
                // backgroundColor: program ? program.color : "black",
                backgroundColor: "black"
              };

              return (
                <View style={styles.activeWrapper}>

                  <View style={[style, styles.activeProgram]}>

                            {/* <Text style={styles.activeProgramTitle}>
                              {program ? program.title : "No Channel"}
                            </Text> */}
    
                            <ReactPlayer
                            className='react-player'
                            url={program ? program.url_channel: ""}
                            playing={true}
                            width='100%'
                            height='100%'
                            />

                  </View>
                  {/* <View style={[style, styles.activeProgram]} />  */}
                  {/* <Text style={styles.activeProgramTitle}>
                    {program ? program.title : "No Channel"}
                  </Text> */}
                </View>
              );
            }
          }

          Active.propTypes = {
            program: PropTypes.shape({
              title: PropTypes.string.isRequired,
              color: PropTypes.string.isRequired
            })
          };

          Active.defaultProps = {
            program: null
          };


          //===================== Essa classe se refere a lista de canais ====================== //
          class Program extends React.PureComponent {
            render() {
              // console.log('Program rendered: ', this.props.realFocusKey);

              const { color, url_logo, onPress, focused, title } = this.props;

              const style = {
                // backgroundColor: color,
                
              };

              return (
                <TouchableOpacity  style={styles.programWrapper}>
                  <View
                    style={[style, styles.program, focused ? styles.focusedBorder : null]}
                  >
                    <Image source = {{uri:url_logo}}
            style = {{ width: '100%', height: '100%' }}
            />
                  </View>
                  {/* <Image source={require(url_logo)} /> */}
                  {/* <ImageBackground source={url_logo} resizeMode="cover" style={styles.image}></ImageBackground> */}
                  <Text style={styles.programTitle}>{title}</Text>
                </TouchableOpacity>
              );
            }
          }

          Program.propTypes = {
            title: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            url_logo: PropTypes.string.isRequired,
            onPress: PropTypes.func.isRequired,
            focused: PropTypes.bool.isRequired

            // realFocusKey: PropTypes.string.isRequired
          };

          const ProgramFocusable = withFocusable()(Program);



          //===================== Essa classe se refere a CATEGORIA ====================== //
          class Category extends React.PureComponent {
            constructor(props) {
              super(props);

              this.scrollRef = null;

              this.onProgramFocused = this.onProgramFocused.bind(this);
              this.onProgramArrowPress = this.onProgramArrowPress.bind(this);
            }

            onProgramFocused({ x }) {
              this.scrollRef.scrollTo({
                x
              });
            }

            onProgramArrowPress(direction, { categoryIndex, programIndex }) {
              if (
                direction === "right" &&
                programIndex === programs.length - 1 &&
                categoryIndex < categories.length - 1
              ) {
                this.props.setFocus(`CATEGORY-${categoryIndex + 1}`);

                return false;
              }

              return true;
            }

            render() {
              // console.log('Category rendered: ', this.props.realFocusKey);

              return (
                <View style={styles.categoryWrapper}>
                  <Text style={styles.categoryTitle}>{this.props.title}</Text> 
                  <ScrollView
                    horizontal
                    ref={(reference) => {
                      if (reference) {
                        this.scrollRef = reference;
                      }
                    }}
                  >
                    {programs.map((program, index) => (
                      <ProgramFocusable
                        {...program}
                        focusKey={`PROGRAM-${this.props.realFocusKey}-${index}`}
                        onPress={() => this.props.onProgramPress(program)}
                        onEnterPress={this.props.onProgramPress}
                        key={program.title}
                        onBecameFocused={this.onProgramFocused}
                        onArrowPress={this.onProgramArrowPress}
                        programIndex={index}
                        categoryIndex={this.props.categoryIndex}
                      />
                    ))}
                  </ScrollView>
                </View>
              );
            }
          }

          Category.propTypes = {
            title: PropTypes.string.isRequired,
            onProgramPress: PropTypes.func.isRequired,
            realFocusKey: PropTypes.string.isRequired,
            categoryIndex: PropTypes.number.isRequired,
            setFocus: PropTypes.func.isRequired
          };

          const CategoryFocusable = withFocusable()(Category);




          //===================== Essa classe se refere as CATEGORIAS ====================== //
          class Categories extends React.PureComponent {
            constructor(props) {
              super(props);

              this.scrollRef = null;

              this.onCategoryFocused = this.onCategoryFocused.bind(this);
            }

            onCategoryFocused({ y }) {
              this.scrollRef.scrollTo({
                y
              });
            }

            render() {
              // console.log('Categories rendered: ', this.props.realFocusKey);

              return (
                <ScrollView
                  ref={(reference) => {
                    if (reference) {
                      this.scrollRef = reference;
                    }
                  }}
                  style={styles.categoriesWrapper}
                >
                  {categories.map((category, index) => (
                    <CategoryFocusable
                      focusKey={`CATEGORY-${index}`}
                      {...category}
                      onProgramPress={this.props.onProgramPress}
                      key={category.title}
                      onBecameFocused={this.onCategoryFocused}
                      categoryIndex={index}

                      // preferredChildFocusKey={`PROGRAM-CATEGORY-${index}-${programs.length - 1}`}
                    />
                  ))}
                </ScrollView>
              );
            }
          }

          Categories.propTypes = {
            onProgramPress: PropTypes.func.isRequired,
            realFocusKey: PropTypes.string.isRequired
          };

          const CategoriesFocusable = withFocusable()(Categories);




          //===================== Essa classe se refere ao SPATIAL ====================== //
          class Spatial extends React.PureComponent {
            constructor(props) {
              super(props);

              this.onWheel = this.onWheel.bind(this);
              this.throttledWheelHandler = throttle(
                this.throttledWheelHandler.bind(this),
                500,
                { trailing: false }
              );
            }

            componentDidMount() {
              window.addEventListener("wheel", this.onWheel, { passive: false });
            }

            componentWillUnmount() {
              window.removeEventListener("wheel", this.onWheel);
            }

            onWheel(event) {
              event.preventDefault();
              this.throttledWheelHandler(event);
            }

            throttledWheelHandler(event) {
              event.preventDefault();
              const { deltaY, deltaX } = event;
              const { navigateByDirection } = this.props;

              if (deltaY > 1) {
                navigateByDirection("down"); // 40 "down"
              } else if (deltaY < 0) {
                navigateByDirection("up"); // 38 "up"
              } else if (deltaX > 1) {
                navigateByDirection("right"); // 39 "right"
              } else if (deltaX < 1) {
                navigateByDirection("left"); // 37 "left"
              }
            }

            render() {
              return (
                <View style={styles.wrapper}>
                  <MenuFocusable focusKey={"MENU"} />
                  <ContentFocusable focusKey={"CONTENT"} />
                </View>
              );
            }
          }

          Spatial.propTypes = {
            navigateByDirection: PropTypes.func.isRequired
          };

          const SpatialFocusable = withFocusable()(Spatial);



    
  
  return (
  <View style={{ height: '100%' }}>
    <SpatialFocusable focusable={true} />
  </View>
  );
};

export default Home;
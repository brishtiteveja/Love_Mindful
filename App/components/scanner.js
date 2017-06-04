
import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Nav from './global-widgets/nav'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';
import Camera from 'react-native-camera';

export default class Scanner extends Component {
  constructor(props) {
      super(props);

      this.camera = null;

      this.state = {
        camera: {
            aspect: Camera.constants.Aspect.fill,
            captureTarget: Camera.constants.CaptureTarget.cameraRoll,
            type: Camera.constants.Type.back,
            orientation: Camera.constants.Orientation.portrait,
            flashMode: Camera.constants.FlashMode.auto,
            torchMode: Camera.constants.TorchMode.off,
        }, 
        isRecording: false
      };
  }

  takePicture() {
      if (this.camera) {
        this.camera.capture() 
            .then((data) => console.log(data))
            .catch(err => console.error(err));
      }
  }

  switchType = () => {
    let newType;
    const { back, front } = Camera.constants.Type;

    if (this.state.camera.type === back) {
      newType = front;
    } else if (this.state.camera.type === front) {
      newType = back;
    }

    this.setState({
      camera: {
        ...this.state.camera,
        type: newType,
      },
    });
  }

  readBarCode = (e) => {
      console.log("BarCode Found! ");
      console.log("Type: " + e.type + "\nData: " + e.data);
  }

  get typeIcon() {
    let icon;
    const { back, front } = Camera.constants.Type;

    if (this.state.camera.type === back) {
      icon = require('../assets/ic_camera_rear_white.png');
    } else if (this.state.camera.type === front) {
      icon = require('../assets/ic_camera_front_white.png');
    }

    return icon;
  }

  switchTorch = () => {
    let newTorchMode;
    const { auto, on, off } = Camera.constants.TorchMode;

    if (this.state.camera.torchMode === on) {
      newTorchMode = off;
    } else if (this.state.camera.torchMode === off) {
      newTorchMode = on;
    }

    this.setState({
      camera: {
        ...this.state.camera,
        torchMode: newTorchMode,
      },
    });
  }

  get torchIcon() {
    let icon;
    const { on, off } = Camera.constants.TorchMode;

    if (this.state.camera.torchMode === on) {
      icon = require('../assets/ic_torch_on_white.png');
    } else if (this.state.camera.torchMode === off) {
      icon = require('../assets/ic_torch_off_white.png');
    }

    return icon;
  }

  render() {
    return (
      <View style={styles.container}>
            <Nav type = "scanner" onPress = {() => this.props.navigator.replace({id:'home'})} />
            <Camera
                ref={(camera) => {
                    this.camera = camera;
                }}
                style={styles.preview}
                aspect={this.state.camera.aspect}
                captureTarget={this.state.camera.captureTarget}
                type={this.state.camera.type}
                orientation={this.state.camera.orientation}
                flashMode={this.state.camera.flashMode}
                torchMode={this.state.camera.torchMode}
                onFocusChanged={() => {}}
                onZoomChanged={() => {}}
                onBarCodeRead={this.readBarCode}
                defaultTouchToFocus
                mirrorImage={false}
            >
                    <View style={styles.rectangleContainer}>
                       <View style={styles.rectangle}/>
                    </View>
            </Camera>

            <View style={[styles.overlay, styles.topOverlay]}>
                <TouchableOpacity
                    style={styles.typeButton}
                    onPress={this.switchType}
                >
                    <Image
                        source={this.typeIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.torchButton}
                    onPress={this.switchTorch}
                >
                    <Image
                        source={this.torchIcon}
                    />
                </TouchableOpacity>
            </View>

            <View style={[styles.overlay, styles.bottomOverlay]}>
                {
                    !this.state.isRecording
                        &&
                    <TouchableOpacity
                        style={styles.captureButton}
                        onPress={this.takePicture.bind(this)}
                    >
                        <Image
                            source={require('../assets/ic_photo_camera_36pt.png')}
                        />
                    </TouchableOpacity>
                        ||
                    null
                }
           </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  topOverlay: {
    top: 70,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40,
  },
  typeButton: {
    padding: 5,
  },
  torchButton: {
    padding: 5,
    backgroundColor: 'white',
  },
  buttonsSpace: {
    width: 10,
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  rectangle: {
    height: 100,
    width: 300,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent',
  },
});

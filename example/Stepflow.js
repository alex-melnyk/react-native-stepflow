import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Colors = {
  lightBlack: 'gray',
  brand: 'red',
  white: 'white'
};

class Stepflow extends React.Component {
  renderLabel = (item, index) => (
    <Text
      key={`label_${index}`}
      style={Styles.label}
    >
      {item.label}
    </Text>
  );

  renderItem = (item, index, array) => {
    switch (item.type) {
      case 'separator':
        return (
          <View
            key={`space_${index}`}
            style={[Styles.separator, {
              borderTopColor: this.props.highlightColor,
              borderBottomColor: this.props.highlightColor,
              backgroundColor: index && array[index - 1].checked ? this.props.highlightColor : this.props.backgroundColor,
            }]}
          />
        );
      default:
        return (
          <View
            key={`check_${index}`}
            style={Styles.stepWrapper}
          >
            <View style={[Styles.step, {
              borderColor: this.props.highlightColor,
              backgroundColor: item.checked ? this.props.highlightColor : this.props.backgroundColor
            }]}>
              {
                item.checked && (
                  <Icon
                    name="check"
                    style={Styles.stepIcon}
                  />
                )
              }
            </View>
          </View>
        );
    }
  };

  render() {
    const {
      steps
    } = this.props;

    const mappedSteps = steps.reduce((acc, item, index) => {
      if (index < steps.length - 1) {
        return [
          ...acc,
          item,
          {type: 'separator'}
        ];
      }

      return [...acc, item];
    }, []);

    return (
      <View style={Styles.container}>
        <View style={Styles.stepsWrapper}>
          {mappedSteps.map(this.renderItem)}
        </View>
        <View style={Styles.labelsWrapper}>
          {mappedSteps.map(this.renderLabel)}
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    height: 70,
    width: '100%',
    alignItems: 'center'
  },
  stepsWrapper: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  stepWrapper: {
    alignItems: 'center'
  },
  step: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
  },
  stepIcon: {
    fontSize: 14,
    color: Colors.white
  },
  separator: {
    marginHorizontal: -2,
    flex: 1,
    height: 10,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    zIndex: 1,
  },
  labelsWrapper: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  label: {
    flex: 1,
    fontSize: 10,
    textAlign: 'center',
    color: Colors.lightBlack
  }
});

export {Stepflow};
import React, { Component } from 'react'
import {
    Text,
    TouchableOpacity,
    View,
    Animated,
    ScrollView
} from 'react-native'

export default class AnimateList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.heightList = [];
        this.hasAnimated = [];
        this.itemRefs = [];
    }
    render() {
        let itemList = this.props.children;
        return (<ScrollView style={[{ height: 300, width: 200, backgroundColor: 'white' }, thi.props.style]}
            onScroll={(e) => {
                if (e.nativeEvent.contentOffset.y > this.scrolly && this.scrolly > 0) { console.log(e.nativeEvent.contentOffset.y, this.scrolly); this.handleScroll(e.nativeEvent.contentOffset.y) }
                this.scrolly = e.nativeEvent.contentOffset.y;
            }}>
            {itemList.map((data, index) => this.renderList(data, index))}
        </ScrollView>)
    }
    renderList(data, index) {
        return (<AnimateItem onLayout={(e) => { this.heightList[index] = e.nativeEvent.layout.height; }}
            style={{ height: this.props.itemStyle.height, width: this.props.itemStyle.width }} key={index}
            ref={(ref) => { this.itemRefs[index] = ref }}>
            {data}
        </AnimateItem>);
    }
    handleScroll(y) {
        let i = this.getItemIndex(y + this.props.style.height);
        if (i < 0) return;
        if (this.hasAnimated[i] == undefined || this.hasAnimated[i] == false) {
            this.itemRefs[i].startAnimate();

        }
    }
    getItemIndex(y) {
        let topH = 0;
        for (let j = 0; j < this.heightList.length; j++) {
            topH += this.heightList[j]
            if (y < topH && topH >= this.props.style.height) return j;
        }
        return -1;
    }
}
AnimateList.defaultProps = {
    style: {
        height: 300, width: 200, backgroundColor: 'white'
    },
    itemStyle: { height: 50, width: 200 }
}
export class AnimateItem extends Component {
    constructor(props) {
        super(props);
        this.state = { offset: new Animated.Value(0) }
        this.isAnimate = false;
    }
    render() {
        return (<Animated.View style={{ transform: [{ translateX: this.state.offset }] }} onLayout={(e) => { this.props.onLayout(e) }}>
            {this.props.children}
        </Animated.View>)
    }
    startAnimate() {

        if (!this.isAnimate) {

            this.isAnimate = true;
            this.state.offset.setValue(this.props.style.width);
            //  Animated.timing(this.state.offset,{toValue:60,duration:0}).start();
            Animated.spring(this.state.offset, { toValue: 0, friction: 5, tension: 5 }).start(() => this.isAnimate = false);
        }
    }
}
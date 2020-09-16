import React, { Component } from 'react';

type Props = {
  onItemClick: (id: number) => void;
  getData: () => Promise<any>;
  color: any;
};

const withData = (View: any) => {
  return class extends Component<Props> {
    state = {
      data: [],
      loading: false,
      error: false
    };
  
    componentDidMount() {
      this.getItemList();
    };

    getItemList = () => {
      this.setState({ loading: true });
      this.props.getData()
        .then(this.onItemsLoaded)
        .catch(this.onError);
    };
  
    onItemsLoaded = (data: any) => {
      this.setState({ data, loading: false });
    };
  
    onError = (error: any) => {
      this.setState({ error: true, loading: false });
      console.error(error);
    };

    render() {
      const { data, loading, error } = this.state;

      if (loading) {
        return <span>Loading...</span>
      }

      if (error) {
        return <span>Some error happened...</span>
      }

      return <View {...this.props} data={data} />
    }
  }
};

export default withData;



// spread object оператор
const carsObj = { 
  first: { brand: 'Kia', model: 'Rio', year: 2004 },
  second: { brand: 'bmw', model: 'X5', year: 2010 },  
};

const moreCarsObj = { ...carsObj, third: { brand: 'chevrolet' } };

console.log(moreCarsObj === carsObj); // false, разные ссылки
console.log(moreCarsObj.first === carsObj.first); // true !!!

// НО, когда мы мутируем один из внутренних объектов, второй не меняется
moreCarsObj.first = { brand: 'Lada', model: 'Priora', year: 2015 };
console.log(moreCarsObj.first); // { brand: 'Lada', model: 'Priora', year: 2015 };
console.log(carsObj.first); // { brand: 'Kia', model: 'Rio', year: 2004 }


// spread array оператор
const cars = [{ brand: 'chevrolet' }, { brand: 'cadillac' }]
const moreCars = [...cars, { brand: 'subaru' }]

console.log(moreCars === cars); // false
console.log(moreCars[0] === cars[0]); // true !!!
import React, { Component } from 'react';

type Props = {
  onItemClick: (id: number) => void;
  getData: () => Promise<any>;
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
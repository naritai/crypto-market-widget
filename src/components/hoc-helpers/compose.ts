const compose = (...funcs: any) => (Component: any) => {
  return funcs.reduceRight((prevResult: any, fn: any) => fn(prevResult), Component)
};

export default compose;
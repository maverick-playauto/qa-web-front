interface ShopActionType {
  shopCode: string;
}

const ShopAction = ({ shopCode }: ShopActionType) => {
  return <div>{shopCode}</div>;
};

export default ShopAction;

type QAType = {
  shopCode: string;
};

const QA = ({ shopCode }: QAType) => {
  return <div>{shopCode}</div>;
};

export default QA;

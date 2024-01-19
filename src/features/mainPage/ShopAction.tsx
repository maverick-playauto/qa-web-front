import { WORK_TYPE, ID_LIST, PROD } from 'utils/const/MainPage';
import * as S from './styles/Styles';
import { Button, Col, Row, Select } from 'antd';

interface ShopActionType {
  shopCode: string;
}

const ShopAction = ({ shopCode }: ShopActionType) => {
  return (
    <S.ShopActionArea>
      {WORK_TYPE.map(work => (
        <Row style={{ margin: 20 }} key={work.value}>
          <Col flex={4}>
            <S.Label>{work.label}</S.Label>
          </Col>
          <Col flex={4}>
            <Select
              defaultValue={ID_LIST[0].value}
              options={ID_LIST}
              popupMatchSelectWidth={false}
              style={{ width: 120 }}
            />
          </Col>
          <Col flex={16}>
            <Row justify="space-around">
              {PROD.map(work => (
                <Button>{work.label}</Button>
              ))}
            </Row>
          </Col>
        </Row>
      ))}
    </S.ShopActionArea>
  );
};

export default ShopAction;

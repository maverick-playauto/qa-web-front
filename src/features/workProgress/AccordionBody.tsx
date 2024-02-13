import { BodyWrapper } from './styles/Styles';

const AccordionBody = () => {
  return (
    <BodyWrapper>
      <div
        style={{
          marginBottom: '3px',
          width: '75dvw',
        }}
      >
        <label
          style={{
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            fontSize: '30px',
            borderRight: '1px solid',
            borderLeft: '1px solid',
            borderTop: '1px solid',
          }}
        >
          상품등록
        </label>
        <div
          style={{
            display: 'flex',
            height: '150px',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'left',
            backgroundColor: '#f5f5f5',
            borderRight: '1px solid',
            borderLeft: '1px solid',
            borderBottom: '1px solid',
          }}
        >
          <label style={{ width: '10dvw', fontSize: '30px' }}># 11111</label>
          <div style={{ width: '50dvw', fontSize: '20px' }}>
            <label style={{ marginBottom: '10px', display: 'flex' }}>
              상품명 : 상품명 길이 테스트
            </label>
            <label style={{ marginBottom: '10px', display: 'flex' }}>
              작업결과 : 성공
            </label>
          </div>
          <div style={{ width: '30dvw' }} />
        </div>
      </div>

      <div
        style={{
          marginBottom: '3px',
          width: '75dvw',
        }}
      >
        <label
          style={{
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            fontSize: '30px',
            borderRight: '1px solid',
            borderLeft: '1px solid',
            borderTop: '1px solid',
          }}
        >
          상품등록
        </label>
        <div
          style={{
            display: 'flex',
            height: '150px',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'left',
            backgroundColor: '#f5f5f5',
            borderRight: '1px solid',
            borderLeft: '1px solid',
            borderBottom: '1px solid',
          }}
        >
          <label style={{ width: '10dvw', fontSize: '30px' }}># 11112</label>
          <div style={{ width: '50dvw', fontSize: '20px' }}>
            <label style={{ marginBottom: '10px', display: 'flex' }}>
              상품명 : 상품명 길이 테스트
            </label>
            <label style={{ marginBottom: '10px', display: 'flex' }}>
              작업결과 : 성공
            </label>
          </div>
          <div style={{ width: '30dvw' }} />
        </div>
      </div>
    </BodyWrapper>
  );
};

export default AccordionBody;

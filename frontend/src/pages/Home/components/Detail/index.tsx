import Modal from '../../../../containers/Modal';

interface Props {
  setOpenDetail: (state: boolean) => void;
}

const Detail: React.FC<Props> = ({ setOpenDetail }) => {
  return (
    <Modal title="Spider-Man" setClose={setOpenDetail}>
      teste
    </Modal>
  );
};

export default Detail;

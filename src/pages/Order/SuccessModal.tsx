interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">​</span>

        {/* <div className="inline-block align-bottom bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div>
                  <p className="text-sm text-gray-500">
                    Заказ успешно оформлен
                  </p>
            </div>
          </div>
        </div> */}
        <div className="inline-block align-bottom border border-gray-500 !bg-transparent backdrop-blur rounded-lg text-center p-4 overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <p className="text-3xl text-gray-500">
            Заказ успешно оформлен
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;

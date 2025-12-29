const ActionButtons = () => {
  return (
    <>
      <style>
        {`
          .btn {
            padding: 8px 16px;
            border-radius: 6px;
            border: none;
            color: #fff;
            font-size: 14px;
            cursor: pointer;
            transition: background-color 0.2s ease, transform 0.1s ease;
          }

          .btn-red {
            background-color: #dc3545;
          }

          .btn-red:hover {
            background-color: #b02a37;
          }

          .btn-green {
            background-color: #198754;
          }

          .btn-green:hover {
            background-color: #146c43;
          }

          .btn-blue {
            background-color: #0d6efd;
          }

          .btn-blue:hover {
            background-color: #0b5ed7;
          }

          .btn:active {
            transform: scale(0.97);
          }
        `}
      </style>

      <button className="btn btn-green">Approve</button>
      <button className="btn btn-red">Reject</button>
      <button className="btn btn-blue">View</button>
    </>
  );
};

export default ActionButtons;

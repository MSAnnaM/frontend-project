// import { registerLocale } from 'react-datepicker';
// import enGB from 'date-fns/locale/en-GB';
// import 'react-datepicker/dist/react-datepicker.css';

// import { useDispatch, useSelector } from 'react-redux';

// import AddCardModal from '../AddCardModal/AddCardModal';
// import { editCard } from '../../redux/card/CardApi';
// import { useState } from 'react';

// // import { selectCard } from '../../redux/card/CardSelectors';

// registerLocale('en-GB', enGB);

// export default function EditCardModal({
//   modalTitle,
//   buttonText,
//   initialValues,
//   onSubmit,
// }) {
//   const dispatch = useDispatch();
//   const [selectedValue, setSelectedValue] = useState('d');
//   // const { title, description, priority, deadline } = useSelector(selectCard);
//   // const initialValues = {
//   //   title :title  || '',
//   //   description: description || '',
//   //   priority,
//   //   deadline: new Date(),
//   // };

//   //   const [startDate, setStartDate] = useState(new Date());
//   //   const [title, setTitle] = useState('');
//   //   const [description, setDescription] = useState('');

//   const handleEditSubmit = e => {
//     e.preventDefault();
//     const cardData = {
//       ...initialValues,
//       title,
//       description,
//       priority: selectedValue,
//       deadline: startDate.getTime(),
//     };
//     console.log(cardData);
//     dispatch(editCard(cardData));
//   };

//   //   const handleChange = e => {
//   //     setSelectedValue(e.target.value);
//   //     if (e.target.name === 'title') {
//   //       setTitle(e.target.value);
//   //     } else if (e.target.name === 'description') {
//   //       setDescription(e.target.value);
//   //     }
//   //   };

//   return (
//     <AddCardModal
//       modalTitle="Edit Card"
//       buttonText="Edit"
//       initialValues={initialValues}
//       onSubmit={handleEditSubmit}
//     />
//   );
// }

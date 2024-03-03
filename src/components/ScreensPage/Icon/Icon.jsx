import Icons from '../../../img/icons/sprite.svg';

const Icon = ({ id, className }) => {
  return (
    <svg className={className}>
      <use href={Icons + '#' + id}></use>
    </svg>
  );
};

export default Icon;

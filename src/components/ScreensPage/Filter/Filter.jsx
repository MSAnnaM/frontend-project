import css from './Filter.module.css';

const Filter = ({ openModal }) => {
  //?????????????????????

  const currentFilter = 'Low';

  return (
    <>
      <h2 className={css.title}>Filters</h2>
      <div className={css.filter_container}>
        <div className={css.filter_wrapper}>
          <form onChange="" className={css.filter_list}>
            <div className={css.radio}>
              <h3 className={css.list_title}>Label color</h3>
              <input
                value={'without'}
                className={css.visually_hidden}
                type="radio"
                name="filter"
                id="without"
                defaultChecked={currentFilter === 'Without' ? true : false}
              />
              <label htmlFor="without" className={css.filter_list_item}>
                <span
                  style={{ backgroundColor: '#ffffff33' }}
                  className={css.input_btn}
                ></span>
                Without priority
              </label>
              <input
                value={'low'}
                className={css.visually_hidden}
                type="radio"
                name="filter"
                id="low"
                defaultChecked={currentFilter === 'Low' ? true : false}
              />
              <label htmlFor="low" className={css.filter_list_item}>
                <span
                  style={{ backgroundColor: '#8fa1d0' }}
                  className={css.input_btn}
                ></span>
                Low
              </label>
              <input
                value={'medium'}
                className={css.visually_hidden}
                type="radio"
                name="filter"
                id="medium"
                defaultChecked={currentFilter === 'medium' ? true : false}
              />
              <label htmlFor="medium" className={css.filter_list_item}>
                <span
                  style={{ backgroundColor: '#e09cb5 ' }}
                  className={css.input_btn}
                ></span>
                Medium
              </label>
              <input
                value={'high'}
                className={css.visually_hidden}
                type="radio"
                name="filter"
                id="high"
                defaultChecked={currentFilter === 'high' ? true : false}
              />
              <label htmlFor="high" className={css.filter_list_item}>
                <span
                  style={{ backgroundColor: '#bedbb0 ' }}
                  className={css.input_btn}
                ></span>
                High
              </label>
            </div>
            <label className={css.btn}>
              Show all
              <input
                value={''}
                className={css.visually_hidden}
                type="radio"
                name="filter"
              />
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default Filter;

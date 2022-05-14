import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames/bind";
import styles from './AcccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src='https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/278809327_164311532699331_2247567141427601032_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-6&_nc_sid=7206a8&_nc_ohc=RXmS-sEmp8sAX9VUX_I&tn=ldh3tJik6r0KV_u8&_nc_ht=scontent.fsgn5-3.fna&oh=00_AT8SzgXp6nmrJinxJJm0o-QWl5cVy9KHCIoleJPpuW78nw&oe=628119B7' alt='Hoaaa'/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Tran Hoang Long</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('username')}>tranhoanglong</span>
            </div>
        </div>
     );
}

export default AccountItem;
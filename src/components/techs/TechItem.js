import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech, deleteTech }) => {
  const { firstName, lastName, id } = tech;
  const onDelete = () => {
    deleteTech(id);
    M.toast({ html: `${firstName} ${lastName} was deleted from technician list` });
  }

  return (
    <li className="collection-item">
      <div>
        { firstName } { lastName }
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
      
    </li>
  )
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
}

export default connect(null, {deleteTech})(TechItem);

import PropTypes from "prop-types";

function user({name, surname, age, friends, isLoggedIn, address}){ //props
    if(!isLoggedIn){
        return <div>Giris yapilmadi</div>
    }

    return <div>
        <>
            {`${name} ${surname} (${age})`}
            <br />
            
            {address.title} {address.zip}
            <br />

            {friends.map((friends, index) => (
                <div key={index}>
                    {friends}
                </div>
            ))}
        </>
        
    </div>;
}

user.propTypes = {
    name: PropTypes.string.isRequired, // zorunlu bir alan olmasi icin
    surname: PropTypes.string,
    age: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]), // matematiksel bir islem gerceklesmeyeceginden oturu  string bir deger de kabul edile bilir
    friends: PropTypes.array,
    isLoggedIn: PropTypes.bool,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
}

user.defaultProps = {
    isLoggedIn: false
}

export default user;
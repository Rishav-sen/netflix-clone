import React from "react"
import './Header.css';

function Header({title}){

    return(
        <div className="main-header"> 
            <img className="nav-logo" src= "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix"/>    
             <img className="nav-profile" src= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUNfoD///8Ae30AeXsLfYAAdnjq9PQAf4H6/f1sr7EAen3x+PjN5OT2+/top6nu9/fl8vJLm5yIvb4eiIrX6emz1ta/2dqgycobh4koj5Fhqap5trdYo6WRw8Scw8Saycq719g+l5lZpad/tLU4kJKKwcKOurvT5ufH4uIsiIqsz9C+1dXYsW+SAAAET0lEQVR4nO3c23aiMBQGYNwI4aQSQDkqMqXFOu//foM6tR7CjEpKbNf/3fUma28SQhJ3qmkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN8Z6YYWMsMgpVGM2zCMJNENncZyWybGl5Fpmv48S0hdkqSl+WIXxiZINZlhENne6IO7TFWlqPO5dYxjznVpDVO4+Gy4FWWO5CFyGxa4p2G4KyYpDKq90TnTduQ0fZ/YuogjZnIaZpcJtilm8kbIjca0vApDUoqsvG555A/+LlLmXodh5RIGE00nggylDZCbJdcjafekk/4ts62o5dFk4E6kqTCMUd77daFaMDh2gmHfRDYXh+EbfVsm+3IC+8vr3fRdkpk4DKv3WHJiccujmZTAb0W840FbWd8M9UVHhm4oJfQbdQ6l/i+i3jxFhnr+dRmunyJDyroyfOmbIYm+9zuzQb8WTvVl72Hnw9sMPJeaHRn2nkvp3Rc33f9TexfWMadH/R90R9Pm4Gsa8Viy+z9o4sJvbTn0/olthF0oYV2qiXYtIz8cfG8hetITW0oY4+sloVkNvwWm/HqTI2lxTMllimbvKfqhOK5SLGVt4YiVZxuMTaXmKEr/dTav+zLPUqhYH3NsXhJVZ21Ur/yPKdVcSTxr2x2SsDrfRk20KYtQySnUgcPes9iLmmab10z2cyYiXdcdhcfBO+NDGDopjgMAAAAAAAAAAAAAAAB+FtKZpv/gn6CIeLxYr2rlKX7ND31jYny+/1XatJVcjDgiSnkqP0eiYvvxq7tbqOxF4nPf9DeF5As8WrE+qa3ZKMyQskO53SSupBUVkB7a5wWh1qBloOfBhMfiEH/JDBmXzchIguiiqMZSVPvSMs5KU1+rvmO17b5CUM/bv/7yced3QGbbjD0+6RCxIhZWZEdD3235dHVfatIEdUL3j1YiJ6yCpuPiR66uC0Vl/pP1G3fuuodKuhFOV15Xmfdoqa4LNT0XhmR6S56wW1YCTjs0tSpfRMKbV4chmilMsB2mXXc1RuY8mFYJ6V1pUttzLOTTYN5Rg33Q2NJLv+5DYWeKLd9bl3YVGnu7Mq59Qdf+L5byPF54HcXrx/6zk8FvQV6lSNnl10vQn968LAN7Ly/L2Ou6w3JmInml9DAnCf45zh5kbounKd0jqpd+50T4ECt6rRS/f+fa/cXqpoF3m9niReV/BBBrl1tZxwXJezVBxZRPL0JtR8ZN92fttt5rlpX2dN33qd0WZHGPWWez5OzpT2Xa51+Xzezuecf1t9n7M/feKTKc2o43//mWn5h52zfebi6/R3oH5FBYteuxaOb+ozetiWtG7dqOv3/PE0NyNNYuzV5WvxdeFJnucWNkua4fNd7i95vNU8a+y9AUGmv7ZeiYpWnF+fSvgvMqDRntF6qa2oNCSXaJthw6oTomAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4cn8ASeo0LIwgKh8AAAAASUVORK5CYII=" alt="flix"/>
         
        </div> 
        
    )
}

export default Header
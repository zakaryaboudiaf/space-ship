

export const moveForward = (pos , dimention ) => {

    let position = pos.split(",");
    
    if(position[2].localeCompare("N") === 0){
        position[0] =  ((Number(position[0]) + 1) > dimention) ? dimention : (Number(position[0]) + 1);
        return position.join(',');
    }
    if(position[2].localeCompare("S") === 0){
        position[0] =  (Number(position[0]) - 1 < 0) ? 0 : (Number(position[0]) - 1);
        return position.join(',');
    }
    if(position[2].localeCompare("E") === 0){
        position[1] =  ((Number(position[1]) + 1) > dimention) ? dimention : (Number(position[1]) + 1);
        return position.join(',');
    }
    if(position[2].localeCompare("W") === 0){
        position[1] =  (Number(position[1]) - 1 < 0) ? 0 : (Number(position[1]) - 1) ;
        return position.join(',');
    }
    return position.join(',');
}

export const moveBackward = (pos , dimention) => {
        
    let position = pos.split(",");
  
    if(position[2].localeCompare("N") === 0){
        position[0] =  (Number(position[0]) - 1 < 0) ? 0 : (Number(position[0]) - 1) ;
        return position.join(',');
    }
    if(position[2].localeCompare("S") === 0){
        position[0] =  ((Number(position[0]) +1) > dimention) ? dimention : (Number(position[0]) +1);
        return position.join(',');
    }
    if(position[2].localeCompare("E") === 0){
        position[1] =  (Number(position[1]) - 1 < 0) ? 0 : (Number(position[1]) - 1) ;
        return position.join(',');
    }
    if(position[2].localeCompare("W") === 0){
        position[1] =  ((Number(position[1]) + 1) > dimention) ? dimention : (Number(position[1]) + 1);
        return position.join(',');
    }
    return position.join(',');
}

export const turnLeft = (pos) => {

    let position = pos.split(",");
    
    if(position[2].localeCompare("N") === 0){
        position[2] =  "W";
        return position.join(',');
    }
    
    if(position[2].localeCompare("S") === 0){
        position[2] =  "E";
        return position.join(',');
    }
    
    if(position[2].localeCompare("E") === 0){
        position[2] =  "N";
        return position.join(',');
    }
    if(position[2].localeCompare("W") === 0){
        position[2] =  "S";
        return position.join(',');
    }
    
    return position.join(',');
}

export const turnRight = (pos) => {

    let position = pos.split(",");
    
    if(position[2].localeCompare("N") === 0){
        position[2] =  "E";
        return position.join(',');
    }
    
    if(position[2].localeCompare("S") === 0){
        position[2] =  "W";
        return position.join(',');
    }
    
    if(position[2].localeCompare("E") === 0){
        position[2] =  "S";
        return position.join(',');
    }
    if(position[2].localeCompare("W") === 0){
        position[2] =  "N";
        return position.join(',');
    }
    
    return position.join(',');
}
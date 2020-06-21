( ( )  =>  { 
    const  refs  =  { 
      openModalBtn : document . querySelector ( '[data-modal-open]' ) , 
      closeModalBtn : document . querySelector ( '[data-modal-close]' ) , 
      модальный : документ . querySelector ( '[data-modal]' ) , 
    } ;
  
    рефов . openModalBtn . addEventListener ( 'click' ,  toggleModal ) ; 
    рефов . closeModalBtn . addEventListener ( 'click' ,  toggleModal ) ;
  
    function  toggleModal ( )  { 
      refs . модальный . classList . переключатель («скрыто») ; 
    } 
  } ) ( ) ;
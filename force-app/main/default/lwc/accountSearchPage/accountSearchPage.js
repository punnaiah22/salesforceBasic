import { LightningElement } from 'lwc';
import searchAccounts from  '@salesforce/apex/accountSearchController.searchaccounts';
 const COLUMNS = [{
            label: 'Account Name',
            fieldName: 'Name'
        },
        {
            label: 'Phone',
            fieldName: 'Phone'
        },
        {
            label: 'Industry',
            fieldName: 'Industry'
        },
        {
            label: 'Rating',
            fieldName: 'Rating'
        }
    ];

export default class AccountSearchPage extends LightningElement {
       // Ratingoptions = [{ label: 'Hot', value: 'hot' },{ label: 'Cold', value: 'cold' },{ label: 'Warm', value: 'warm' }];

    SelectedRating;
    searchKey =''; //empty string(It means initially, no Account Name value is stored.)
    accounts; 
    columns=COLUMNS;
    noRecords = false;
    

     handleSearchChange(event){
      this.searchKey=event.target.value;
   }
     get Ratingoptions () {
        return[
    { label: 'Hot', value: 'hot' },
    { label: 'Cold', value: 'cold' },
    { label: 'Warm', value: 'warm' }
               ];
     }

    handleRatingChange(event){
        this.SelectedRating=event.target.value;

    }

    handleSearch(event){
        searchAccounts({searchKey: this.searchKey, rating: this.SelectedRating}).then(result=>{
            this.accounts = result;
            this.noRecords = this.accounts.length === 0;

        }).catch();

    }

    handleClear(event){
        this.searchKey='';
        this.SelectedRating = '';
        this.accounts=[];
        this.noRecords = false;
    }


}
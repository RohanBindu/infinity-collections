pragma solidity ^0.8.0;
import "./ownable.sol";
import "./SafeMath.sol";
import "./Strings.sol";


contract EternalHouseFactory is Ownable{

using SafeMath for uint256;
using Strings for uint256;



    
uint256 initialFreezeTimeStamp; // date set to intially freeze
uint256 hibernationTimePeriod; // hibernation time period -- will be in years
uint256 saleTimePeriod; // sale time period -- will be in years 


///////////////////////////////

/// EVENTS  ///

/////////////////////////////

    event UpdatedFreezeStamp(bool set);
    event UpdatedHibernationPeriod(bool set);
    event UpdatedSalePeriod(bool set);
   



// only owner can withdraw money deposited in the contract
      function withdraw() external onlyOwner returns(bool){
        address payable _owner = payable(msg.sender);
        _owner.transfer(address(this).balance);
        return true;
    }


    // set a unix timestamp of the intial freeze date. ownly owner can do this
  function setInitialFreezeTimeStamp(uint256 _freezeTimeStamp) external onlyOwner{
        initialFreezeTimeStamp  = _freezeTimeStamp;
        emit UpdatedFreezeStamp(true);
  }

    // set a hibernation time period in uint256 -- this will be converted to years by multiplying by 365 days
  function setHibernationTimePeriod(uint256 _hibernationTimePeriod) external onlyOwner{
        hibernationTimePeriod  =  _hibernationTimePeriod.mul(365 days);
         emit UpdatedHibernationPeriod(true);
  }

    // set a sale time period in uint256 -- this will be converted to years by multiplying by 365 days
   function setSaleTimePeriod(uint256 _saleTimePeriod) external onlyOwner{
        saleTimePeriod  =  _saleTimePeriod.mul(365 days);
         emit UpdatedSalePeriod(true);
  }

    

}
/**
 * 等号表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        EqOperator = require( "operator/binary-opr/relational/eq" );

    return kity.createClass( 'EqExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new EqOperator() );

        }

    } );

} );

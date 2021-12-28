// mca-projen-jsii-example
package mcaprojenjsiiexample

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
	_init_ "github.com/marciocadev/mca-projen-jsii-example/mcaprojenjsiiexample/jsii"
)

// My Hello class.
type Hello interface {
	SayHello(name *string) *string
}

// The jsii proxy struct for Hello
type jsiiProxy_Hello struct {
	_ byte // padding
}

func NewHello() Hello {
	_init_.Initialize()

	j := jsiiProxy_Hello{}

	_jsii_.Create(
		"mca-projen-jsii-example.Hello",
		nil, // no parameters
		&j,
	)

	return &j
}

func NewHello_Override(h Hello) {
	_init_.Initialize()

	_jsii_.Create(
		"mca-projen-jsii-example.Hello",
		nil, // no parameters
		h,
	)
}

// My sayHello function.
//
// Returns: Greetings
func (h *jsiiProxy_Hello) SayHello(name *string) *string {
	var returns *string

	_jsii_.Invoke(
		h,
		"sayHello",
		[]interface{}{name},
		&returns,
	)

	return returns
}

